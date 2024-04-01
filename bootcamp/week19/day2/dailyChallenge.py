userInput = input("Enter a string: ")
if len(userInput) > 10:
    print("This string is too long")
elif len(userInput) == 10:
    print("This string is 10 characters long")
else:
    print("This string is too short")


print("your first caracters where:" + userInput[0:2] + " and your last caracters where:" + userInput[-2:])
userInput = input("Enter a string: ")
for i in range(2, len(userInput) + 1):
    print(userInput[:i])