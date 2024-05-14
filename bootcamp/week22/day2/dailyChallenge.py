import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
            self.diameter = 2 * radius
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be provided")

    @property
    def area(self):
        return math.pi * self.radius ** 2

    def __str__(self):
        return f"Circle with radius {self.radius}"

    def __add__(self, other):
        return Circle(radius=self.radius + other.radius)

    def __gt__(self, other):
        return self.radius > other.radius

    def __eq__(self, other):
        return self.radius == other.radius

    def __lt__(self, other):
        return self.radius < other.radius

# Example usage:
circle1 = Circle(radius=5)
circle2 = Circle(diameter=10)

print(circle1)  # Output: Circle with radius 5
print(circle2)  # Output: Circle with radius 5

print("Area of circle1:", circle1.area)  # Output: Area of circle1: 78.53981633974483

circle3 = circle1 + circle2
print(circle3)  # Output: Circle with radius 15

print("Circle1 > Circle2:", circle1 > circle2)  # Output: Circle1 > Circle2: False
print("Circle1 == Circle2:", circle1 == circle2)  # Output: Circle1 == Circle2: True
print("Circle1 < Circle2:", circle1 < circle2) 
