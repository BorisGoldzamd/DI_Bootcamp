import random
class Game:
    def __init__(self):
        self.choices = ["rock", "paper", "scissors"]
        
    def get_user_item(self):
        while True:
            user_choice = input("Enter rock, paper, or scissors: ").lower()
            if user_choice in self.choices:
                return user_choice
            else:
                print("Invalid input. Please try again.")

    def get_comp_item(self):
        return random.choice(self.choices)

    def get_game_result(self, user_choice, comp_choice):
        if user_choice == comp_choice:
            return "draw"
        elif (user_choice == "rock" and comp_choice == "scissors") or \
             (user_choice == "scissors" and comp_choice == "paper") or \
             (user_choice == "paper" and comp_choice == "rock"):
            return "win"
        else:
            return "loss"
        
    def play(self):
        user_choice = self.get_user_item()
        comp_choice = self.get_comp_item()
        result = self.get_game_result(user_choice, comp_choice)
        print(f"You chose: {user_choice}")
        print(f"Computer chose: {comp_choice}")
        print(f"Result: {result}")
        return result

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
