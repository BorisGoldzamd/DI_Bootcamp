def print_board(board):
    # Imprimir la parte superior del contorno
    print("+" + "---+" * 3)
    
    # Imprimir las filas de la rejilla
    for i, row in enumerate(board):
        print("|", end="")
        for j, cell in enumerate(row):
            if cell == ' ':
                print(f" {i * 3 + j + 1} |", end="")
            else:
                print(f" {cell} |", end="")
        print()
        
        # Imprimir el contorno intermedio entre las filas
        print("+" + "---+" * 3)

def initialize_board():
    return [[' ' for _ in range(3)] for _ in range(3)]

def is_valid_move(move):
    return move.isdigit() and 1 <= int(move) <= 9

def get_move(player):
    while True:
        move = input(f"Jugador {player}, elige una casilla (1-9): ")
        if is_valid_move(move):
            return int(move)
        else:
            print("Entrada inválida. Inténtalo de nuevo.")

def place_move(board, move, player):
    row = (move - 1) // 3
    col = (move - 1) % 3
    if board[row][col] == ' ':
        board[row][col] = player
        return True
    else:
        print("Casilla ocupada. Elige otra.")
        return False

def switch_player(player):
    return 'X' if player == 'O' else 'O'

# Función principal del juego
def play_game():
    while True:
        board = initialize_board()
        player = 'X'
        print_board(board)
        for _ in range(9):
            move = get_move(player)
            while not place_move(board, move, player):
                move = get_move(player)
            print_board(board)
            if check_winner(board, player):
                print(f"¡Jugador {player} ha ganado!")
                break
            player = switch_player(player)
        else:
            print("¡Empate!")
        
        # Preguntar si desean volver a jugar
        again = input("¿Do you want to play again? (y/n): ").lower()
        if again != 's':
            break

# Función para verificar si hay un ganador
def check_winner(board, player):
    # Verificar filas
    for row in board:
        if all(cell == player for cell in row):
            return True
    # Verificar columnas
    for col in range(3):
        if all(board[row][col] == player for row in range(3)):
            return True
    # Verificar diagonales
    if all(board[i][i] == player for i in range(3)) or all(board[i][2-i] == player for i in range(3)):
        return True
    return False

# Ejecutar el juego
play_game()
