if __name__ == '__main__':
    students = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])
    print(students)
    # Sort the list of students based on their scores
    students.sort(key=lambda x: (x[1], x[0]))
    print(students)
   