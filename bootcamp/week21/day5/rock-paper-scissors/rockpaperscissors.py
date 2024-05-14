from game import Game

def get_user_menu_choice():
    print("Menu:")
    print("1. Play a new game")
    print("2. Show scores")
    print("3. Quit")

    while True:
        choice = input("Enter your choice (1-3): ")
        if choice in ["1", "2", "3"]:
            return choice
        else:
            print("Invalid choice. Please try again.")

def print_results(results):
    print("Results of the games played:")
    for outcome, count in results.items():
        print(f"{outcome}: {count}")
    print("Thank you for playing!")

def main():
    results = {"win": 0, "loss": 0, "draw": 0}

    while True:
        choice = get_user_menu_choice()

        if choice == "1":
            game = Game()
            result = game.play()
            results[result] += 1
        elif choice == "2":
            print_results(results)
        elif choice == "3":
            print_results(results)
            break

if __name__ == "__main__":
    main()
