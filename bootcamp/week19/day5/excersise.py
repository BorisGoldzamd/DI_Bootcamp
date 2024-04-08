#exc1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

zip1 = dict(zip(keys, values))
print(zip1)



#exc2
def calculate_ticket_price(age):
    if age < 3:
        return 0
    elif 3 <= age <= 12:
        return 10
    elif age > 12:
        return 15
    
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
family_price = sum([calculate_ticket_price(age) for member, age in family.items()])
print(family_price)


#exc3 Zara
brand = {
    'name': 'Zara',
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona',
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'France': 'blue',
    'Spain': 'red',
    'US': ['pink', 'green']
}

brand['number_stores'] = 2

print('Zara clients are ')

brand['country_creation'] = 'Spain'

brand['international_competitors'] = ['Desigual']

del brand['creation_date']

print(brand['international_competitors'][-1])

print(brand['US'])

print(len(brand.keys()))

print(brand.keys())

more_on_zara = {
    'creation_date': 1975,
    'number_stores': 10000
}

brand.update(more_on_zara)

print(brand['number_stores'])

print(brand)

#exc4
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

for index,user  in enumerate (users):
    print(user,index)


    for user in sorted(users):
    print(user)

for user in users:
    if 'i' in user:
        print(user)


for user in users:
    if user[0] == 'm' or user[0] == 'p':
        print(user)
