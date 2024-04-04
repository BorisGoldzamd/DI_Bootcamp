#challenge1
number = int(input("Enter a number: "))
length = int(input("Enter the length: "))

multiples_list = []

for i in range(1, length + 1):
    multiples_list.append(number * i)

print("List of multiples:", multiples_list)

#challenge2
word = input("Enter a word: ")

new_word = ""
prev_char = None

for char in word:
    if char != prev_char:
        new_word += char
    prev_char = char

print("New word with consecutive duplicates removed:", new_word)
