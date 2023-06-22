def main():
    number1 = input("Input Number 1: ")
    number2 = input("Input Number 2: ")
    
    sum_of_numbers = calculate_sum(number1, number2)
    print("Sum of Numbers:", sum_of_numbers)
    
def calculate_sum(number1, number2):
    sum_list = []
    carry = 0
    max_length = max(len(number1), len(number2))
    
    for i in range(max_length):
        digit1 = get_digit(number1, i)
        digit2 = get_digit(number2, i)
        
        digit_sum = digit1 + digit2 + carry
        sum_list.append(str(digit_sum % 10))
        carry = digit_sum // 10
    
    if carry > 0:
        sum_list.append(str(carry))
    
    return ''.join(sum_list[::-1])
    
def get_digit(number, index):
    if index < len(number):
        return int(number[-1 - index])
    return 0

if _name_ == '_main_':
    main()
