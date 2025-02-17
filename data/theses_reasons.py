import re
import sys


def filter_lines(filename):
    # Regex pattern to match [2][X] where X is 1-2 digits
    num = sys.argv[1]
    multiline_str = sys.argv[2].split("\n")

    print("--------------")

    pattern = re.compile(fr"\[\d{{1,2}}\]\[{num}\]\[\d{{1,2}}\] = '([^']*)'")

    with open(filename, 'r', encoding='utf-8') as file:
        i = 0
        for line in file:
            line = line.strip()
            if pattern.search(line):
                extracted_text = re.findall(r"'([^']+)'", line)
                extracted_text = extracted_text[0] if extracted_text else ""
                multiline_str[i] = re.sub(
                    r"reason: ''", f"reason: '{extracted_text}'", multiline_str[i])
                print(f"{multiline_str[i]}")
                i += 1


if __name__ == "__main__":
    filter_lines("input2.txt")
