class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# Creating instances of each cat breed
bengal_cat = Bengal("Simba", 3)
chartreux_cat = Chartreux("Luna", 2)
siamese_cat = Siamese("Milo", 4)

# Creating the list of all cats
all_cats = [bengal_cat, chartreux_cat, siamese_cat]

# Sara's pets instance
sara_pets = Pets(all_cats)

# Take all the cats for a walk
sara_pets.walk()



#exc2
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        my_speed = self.run_speed() * self.weight
        other_speed = other_dog.run_speed() * other_dog.weight
        winner = self.name if my_speed > other_speed else other_dog.name
        return f"{winner} wins the fight"

# Create 3 dogs
dog1 = Dog("Rex", 5, 30)
dog2 = Dog("Buddy", 3, 40)
dog3 = Dog("Shadow", 7, 25)

# Let's see who wins a fight
print(dog1.fight(dog2))
print(dog2.fight(dog3))



#exc3
from random import choice

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = ', '.join([dog.name for dog in args])
        print(f"{dog_names} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [f"{self.name} does a barrel roll",
                      f"{self.name} stands on his back legs",
                      f"{self.name} shakes your hand",
                      f"{self.name} plays dead"]
            print(choice(tricks))
        else:
            print(f"{self.name} can't perform tricks yet.")


#exc4
class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations! A child is born into the {self.last_name} family.")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f"The {self.last_name} Family")
        for member in self.members:
            print(member)

# Example usage
family = Family("Doe", [
    {'name':'Michael','age':35,'gender':'Male','is_child':False},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False}
])
family.born(name='Jack', age=0, gender='Male', is_child=True)
print(family.is_18('Michael'))
family.family_presentation()



#exc5
class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['name']}'s power is {member['power']}")
                else:
                    raise Exception(f"{name} is not over 18 years old")

    def incredible_presentation(self):
        print("*Here is our powerful family**")
        super().family_presentation()

# Example usage
incredibles = TheIncredibles("Incredibles", [
    {'name':'Michael','age':35,'gender':'Male','is_child':False, 'power': 'fly', 'incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False, 'power': 'read minds', 'incredible_name':'SuperWoman'}
])
incredibles.incredible_presentation()
incredibles.born(name='Jack', age=0, gender='Male', is_child=True, power='Unknown Power')
incredibles.incredible_presentation()
