def compute_division():
    try:
        result = 5 / 0
        print("Result of division:", result)
    except ZeroDivisionError:
        print("Error: Division by zero!")

compute_division()
