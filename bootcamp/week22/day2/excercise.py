#exc1 
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}"

    def __int__(self):
        return self.amount

    def __repr__(self):
        return f"{self.amount} {self.currency}"

    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            return Currency(self.currency, self.amount + other.amount)
        else:
            return Currency(self.currency, self.amount + other)

    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            self.amount += other.amount
            return self
        else:
            self.amount += other
            return self


#exc3
import string
import random

def generate_random_string(length):
    letters = string.ascii_letters
    return ''.join(random.choice(letters) for _ in range(length))

random_string = generate_random_string(5)
print(random_string)


#exc4
from datetime import datetime

def display_current_date():
    current_date = datetime.now().strftime("%Y-%m-%d")
    print("Current date:", current_date)

display_current_date()


#exc5
from datetime import datetime, timedelta

def time_left_until_january_1st():
    current_date = datetime.now()
    january_1st = datetime(current_date.year + 1, 1, 1)
    time_left = january_1st - current_date
    print(f"The 1st of January is in {time_left.days} days and {time_left.seconds // 3600} hours.")

time_left_until_january_1st()


#exc6
from datetime import datetime

def minutes_lived_since_birth(birthdate):
    birth_datetime = datetime.strptime(birthdate, "%Y-%m-%d")
    current_datetime = datetime.now()
    minutes_lived = (current_datetime - birth_datetime).total_seconds() / 60
    print(f"You have lived approximately {minutes_lived} minutes since your birth.")

minutes_lived_since_birth("2000-01-01")


#exc7
from faker import Faker

faker = Faker()

users = []

def add_user():
    user = {
        "name": faker.name(),
        "address": faker.address(),
        "language_code": faker.language_code()
    }
    users.append(user)

# Example usage:
for _ in range(5):
    add_user()

print(users)

