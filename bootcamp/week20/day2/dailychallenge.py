#Matrix String
# Write a function that takes a list of strings and return the strings as a matrix with each character as a separate element.

user_input = ["a c", "def", "ghi"]

def MatrixString(user_input):
    return [[char for char in string] for string in user_input]

for element in MatrixString(user_input):
    print(element)
