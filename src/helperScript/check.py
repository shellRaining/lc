import os
import subprocess
import re
import argparse


def check_files(folder_path='.', recursive=False):
    files_to_open = []
    pattern = re.compile(r'export \{[^\}]+\};')
    for root, dirs, files in os.walk(folder_path):
        if not recursive:
            dirs.clear()
        for file in files:
            if file.endswith(".ts"):
                file_path = os.path.join(root, file)
                with open(file_path, "r") as f:
                    content = f.read()
                    if not pattern.search(content):
                        files_to_open.append(file_path)

    if files_to_open:
        with open("files_to_open.txt", "w") as f:
            f.write("\n".join(files_to_open))

        subprocess.run(["nvim"] + files_to_open)

    else:
        print("All files conform to the pattern.")


# 创建参数解析器
parser = argparse.ArgumentParser(
    description="Check files for a specific pattern and open them in Neovim.")
parser.add_argument("folder_path", metavar="FOLDER_PATH",
                    help="Path to the folder to check")
parser.add_argument("-r", "--recursive", action="store_true",
                    help="Recursively search subdirectories")

# 解析命令行参数
args = parser.parse_args()

# 提取参数值
folder_path = args.folder_path
recursive = args.recursive

check_files(folder_path, recursive)
