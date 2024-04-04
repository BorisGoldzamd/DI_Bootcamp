#exc1
my_fav_numbers = set()
my_fav_numbers.add(1)
my_fav_numbers.add(2)
my_fav_numbers.add(3)

my_fav_numbers.remove(2)

friend_fav_numbers = set()
friend_fav_numbers.add(4)

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)


#exc2 #no i cant

#exc3 
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.remove("Apples")
basket.insert(0, "Apples")
basket.count("Apples")
basket.clear()
print(basket)


#exc4
#a float its a int with numbers after the . like 1.1 1.2 1.3 1.4
list = [1]
for i in list: 
    new_element = i + 0.5
    list.append(new_element)
    print(list)
    if list[-1] >= 3:
        break   
#i can think about making a function but at the end we would use for in
    
#exc6

my_name = 'Boris'
user_input = input('Enter your name: ')
while user_input != my_name:
    user_input = input('Enter your name: ')

#exc7
    user_list = []
    while user_input_favorite_fruit != "":
        user_list.append(user_input_favorite_fruit)
        user_input_favorite_fruit = input('Enter your favorite fruit (press enter to finish): ')
    user_input_fruit_name= input('Enter the name of a fruit: ')
    if user_input_fruit_name in user_list:
        print('You chose one of your favorite fruits! Enjoy!')
    else:
        print('You chose a new fruit. I hope you enjoy it too!')


#exc8
    while pizza_topings != "":
        pizza_topings = input('Enter a pizza topping (press enter to finish): ')
        if pizza_topings != "":
            pizza.append(pizza_topings)
    print('Your pizza has the following toppings: ')

    #exc9
# Asking for family members' ages
num_people = int(input("How many people are in your family? "))
total_cost = 0

for i in range(num_people):
    age = int(input(f"Enter the age of person {i+1}: "))
    if age < 3:
        ticket_price = 0
    elif 3 <= age <= 12:
        ticket_price = 10
    else:
        ticket_price = 15
    total_cost += ticket_price

print("Total cost of tickets for the family:", total_cost)

# Group of teenagers
teenagers = ["Alice", "Bob", "Charlie", "David"]
allowed_ages = range(16, 22)

print("List of teenagers:")
for teenager in teenagers[:]:
    age = int(input(f"Enter the age of {teenager}: "))
    if age not in allowed_ages:
        teenagers.remove(teenager)

print("Final list of teenagers allowed to watch the movie:", teenagers)


#exc10
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# Removing all occurrences of "Pastrami sandwich" from sandwich_orders using a while loop
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

print("The deli has run out of pastrami.")

# Creating an empty list called finished_sandwiches
finished_sandwiches = []

# One by one, removing each sandwich from sandwich_orders and adding them to finished_sandwiches
while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(current_sandwich)
    print(f"I made your {current_sandwich.lower()}")

print("\nList of finished sandwiches:")
for sandwich in finished_sandwiches:
    print(sandwich)
