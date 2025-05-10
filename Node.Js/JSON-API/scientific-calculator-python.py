import math

def menu():
    print("\n===== Scientific Calculator =====")
    print("Select operation:")
    print("1. Addition (+)")
    print("2. Subtraction (-)")
    print("3. Multiplication (*)")
    print("4. Division (/)")
    print("5. Power (x^y)")
    print("6. Square Root (√x)")
    print("7. Logarithm (log base 10)")
    print("8. Natural Logarithm (ln)")
    print("9. Sine (sin)")
    print("10. Cosine (cos)")
    print("11. Tangent (tan)")
    print("12. Factorial (n!)")
    print("13. Exit")

def get_number(prompt="Enter a number: "):
    while True:
        try:
            value = float(input(prompt))
            return value
        except ValueError:
            print("Invalid input. Please enter a valid number.")

def pause():
    input("Pressione Enter para continuar...")

def main():
    while True:
        menu()
        choice = input("Choose an operation (1-13): ")
        if choice == '1':
            a = get_number("Enter first number: ")
            b = get_number("Enter second number: ")
            print(f"Result: {a} + {b} = {a + b}")
            pause()
        elif choice == '2':
            a = get_number("Enter first number: ")
            b = get_number("Enter second number: ")
            print(f"Result: {a} - {b} = {a - b}")
            pause()
        elif choice == '3':
            a = get_number("Enter first number: ")
            b = get_number("Enter second number: ")
            print(f"Result: {a} * {b} = {a * b}")
            pause()
        elif choice == '4':
            a = get_number("Enter numerator: ")
            b = get_number("Enter denominator: ")
            if b == 0:
                print("Error: Division by zero!")
            else:
                print(f"Result: {a} / {b} = {a / b}")
            pause()
        elif choice == '5':
            a = get_number("Enter the base: ")
            b = get_number("Enter the exponent: ")
            print(f"Result: {a}^{b} = {math.pow(a, b)}")
            pause()
        elif choice == '6':
            a = get_number("Enter the number: ")
            if a < 0:
                print("Error: Cannot take square root of a negative number!")
            else:
                print(f"Result: √{a} = {math.sqrt(a)}")
            pause()
        elif choice == '7':
            a = get_number("Enter the number: ")
            if a <= 0:
                print("Error: Logarithm only defined for positive numbers!")
            else:
                print(f"Result: log10({a}) = {math.log10(a)}")
            pause()
        elif choice == '8':
            a = get_number("Enter the number: ")
            if a <= 0:
                print("Error: Natural logarithm only defined for positive numbers!")
            else:
                print(f"Result: ln({a}) = {math.log(a)}")
            pause()
        elif choice == '9':
            a = get_number("Enter the angle in degrees: ")
            radians = math.radians(a)
            print(f"Result: sin({a}°) = {math.sin(radians)}")
            pause()
        elif choice == '10':
            a = get_number("Enter the angle in degrees: ")
            radians = math.radians(a)
            print(f"Result: cos({a}°) = {math.cos(radians)}")
            pause()
        elif choice == '11':
            a = get_number("Enter the angle in degrees: ")
            radians = math.radians(a)
            print(f"Result: tan({a}°) = {math.tan(radians)}")
            pause()
        elif choice == '12':
            a = get_number("Enter a non-negative integer: ")
            if a < 0 or not a.is_integer():
                print("Error: Factorial is only defined for non-negative integers!")
            else:
                print(f"Result: {int(a)}! = {math.factorial(int(a))}")
            pause()
        elif choice == '13':
            print("Exiting calculator. Goodbye!")
            break
        else:
            print("Invalid choice. Please select a valid operation.")
            pause()

if __name__ == "__main__":
    main()