import re


def filter_lines(filename):
    for i in range(28):
        num = i + 1
        print(f"------ Party {num} ------")
        pattern = re.compile(fr"\[\d{{1,2}}\]\[{i}\]")

        with open(filename, 'r', encoding='utf-8') as file:
            for line in file:
                line = line.strip()
                if pattern.search(line):
                    if "'1'" in line:
                        print("{ state: State.Approve, reason: '' },")
                    elif "'0'" in line:
                        print("{ state: State.Neutral, reason: '' },")
                    elif "'-1'" in line:
                        print("{ state: State.Disprove, reason: '' },")
                    else:
                        print(f"{line} -> No decision")


if __name__ == "__main__":
    filter_lines("theses_votes.txt")
