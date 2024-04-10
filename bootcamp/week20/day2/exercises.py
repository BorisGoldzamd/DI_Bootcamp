import random
#exc1
def display_message():
    print("I'm learning about functions in this chapter.")
display_message()

#exc2
def favorite_book(title):
    print(f"One of my favorite books is {title}.")
favorite_book("Alice in Wonderland")

#exc3
def describe_city(city, country="USA"):
    print(f"{city} is in {country}.")
describe_city("New York")
describe_city("Paris", "France")
describe_city("London")

#exc4
def number():
    user_number = int(input("Enter a number between 1 to 100: "))
    if user_number > 100 or user_number < 1:
        print("Invalid number")
    else:
        random_number = random.randint(1, 100)
        if user_number == random_number:
            print("You guessed the right number!")
        else:
            print("Try again!")

number()

#exc5
def make_shirt(size, message):
    print(f"The size of the shirt is {size} and the message is {message}.")
make_shirt("M", "Hello World!")
make_shirt(message="Hello World!", size="M")

#exc6
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magician_names):
    for magician in magician_names:
        print(magician)

def make_great(magician_names):
    great_magicians = []
    for magician in magician_names:
        great_magician = magician + " the Great"
        great_magicians.append(great_magician)
    return great_magicians
