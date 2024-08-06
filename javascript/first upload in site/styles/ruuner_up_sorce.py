if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    
    # Convert the map object to a list
    arr = list(arr)
    
    # Remove duplicates by converting the list to a set and back to a list
    unique_scores = list(set(arr))

    # Sort the unique scores in descending order
    unique_scores.sort(reverse=True)

    # Print the second element of the sorted list, which is the runner-up score
    print(unique_scores[1])
