#exc 1
import random

def get_random_temp(season):
    if season.lower() == 'summer':
        return random.randrange(15, 40)
    elif season.lower() == 'autumn' or season.lower() == 'fall':
        return random.randrange(5, 25)
    elif season.lower() == 'winter':
        return random.randrange(-10, 17)
    elif season.lower() == 'spring':
        return random.randrange(5, 20)
    else:
        print("Invalid season. Please enter 'summer', 'autumn', 'winter', or 'spring'.")

def main():
    season = input("Enter the season (summer, autumn, winter, spring): ")
    room_temperature = get_random_temp(season)
    print(f'The room temperature is {room_temperature} degrees Celsius.', end="")
    if room_temperature < 10:
        print(", It's cold.")
    elif room_temperature < 20:
        print(", It's warm.")
    else:
        print(", It's hot.")

main()


#exc 2

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def question_to_user(data):
    wrong_answers = []
    for question in data:
        answer = input(question["question"])
        if answer.lower() == question["answer"].lower():
            print("Correct!")
        else:
            print("Incorrect. The correct answer is", question["answer"])
            wrong_answers.append(question["question"])
    return wrong_answers

wrong_answers_list = question_to_user(data)
print("List of wrong answers:", wrong_answers_list)


#exc3
import datetime

# Function to calculate age
def get_age(year, month, day):
    current_date = datetime.date.today()
    birth_date = datetime.date(year, month, day)
    age = current_date.year - birth_date.year - ((current_date.month, current_date.day) < (birth_date.month, birth_date.day))
    return age

# Function to check if a person can retire
def can_retire(gender, date_of_birth):
    current_year = datetime.date.today().year
    current_month = datetime.date.today().month
    current_day = datetime.date.today().day
    year, month, day = map(int, date_of_birth.split('/'))
    
    age = get_age(year, month, day)
    
    if gender.lower() == 'm':
        retirement_age = 67
    elif gender.lower() == 'f' and (current_year > 1947 or (current_year == 1947 and current_month > 4)):
        retirement_age = 62
    else:
        retirement_age = None
    
    if retirement_age is not None and age >= retirement_age:
        return True
    else:
        return False

# Ask user for gender and date of birth
gender = input("Enter your gender (m/f): ")
date_of_birth = input("Enter your date of birth (yyyy/mm/dd): ")

# Check if the person can retire
retire_status = can_retire(gender, date_of_birth)

# Display result
if retire_status:
    print("Congratulations! You can retire.")
else:
    print("Sorry, you cannot retire yet.")

#exc4
def calculation():
    X = int(input("Enter a number: "))
    X_str = str(X)
    return print(f"Result: {X + int(X_str + X_str) + int(X_str + '3') + int(X_str + '4')}")

calculation()
