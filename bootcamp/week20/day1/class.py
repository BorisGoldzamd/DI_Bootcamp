def calculation(a, b):
    return a+b, a-b, a/b, a*b, a%b

a = int(input("Ingrese el valor de a: "))
b = int(input("Ingrese el valor de b: "))
res = calculation(a, b)
print(res)  # (a+b, a-b, a/b, a*b, a%b)
