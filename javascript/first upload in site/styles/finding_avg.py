if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    
    # Read the student data and store it in the dictionary
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    
    # Read the query_name
    query_name = input()
    
    # Calculate the average for the query_name and print it with two decimal places
    if query_name in student_marks:
        average = sum(student_marks[query_name]) / len(student_marks[query_name])
        print("{:.2f}".format(average))
