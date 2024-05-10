#exc1
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

    def __str__(self):
        return f"The oldest cat is {self.name} and he is {self.age} years old."

# Instantiate a cat
cat1 = Cat("Whiskers", 3)
print(cat1)


#exc2
class dog: 
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height = dog_height
    def bark(self):
        return f"{self.name}  bark bark"
    def jump(self):
        return f"{self.name} jumps {self.height * 2} cm high"

dog1 = dog("Lassie", 30)
davisdog = dog("Rex", 50)
print(davisdog.bark())
print(davisdog.jump())

if dog1.height > davisdog.height:
    print(f"{dog1.name} is taller than {davisdog.name}")

#exc3
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

# Creating an instance of Song with provided lyrics
stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])

# Calling the method to print the song lyrics
stairway.sing_me_a_song()


###EXC4
class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        else:
            print(f"No such animal: {animal_sold} in the zoo.")

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        groups = {}
        current_letter = None
        index = 0

        for animal in sorted_animals:
            if animal[0] != current_letter:
                current_letter = animal[0]
                index += 1
                groups[index] = [animal]
            else:
                groups[index].append(animal)
        
        self.sorted_groups = groups

    def get_groups(self):
        for index in sorted(self.sorted_groups):
            print(f"{index}: {self.sorted_groups[index]}")

# Creating an object
ramat_gan_safari = Zoo("Ramat Gan Safari")

# Using the Zoo methods
ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Ape")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Eel")
ramat_gan_safari.add_animal("Emu")

ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal("Bear")
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()
