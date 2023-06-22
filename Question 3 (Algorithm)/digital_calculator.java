import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Input Number 1: ");
        String number1 = scanner.nextLine();
        System.out.print("Input Number 2: ");
        String number2 = scanner.nextLine();
        
        String sum = calculateSum(number1, number2);
        System.out.println("Sum of Numbers: " + sum);
    }
    
    public static String calculateSum(String number1, String number2) {
        StringBuilder sum = new StringBuilder();
        int carry = 0;
        int maxLength = Math.max(number1.length(), number2.length());
        
        for (int i = 0; i < maxLength; i++) {
            int digit1 = getDigit(number1, i);
            int digit2 = getDigit(number2, i);
            
            int digitSum = digit1 + digit2 + carry;
            sum.append(digitSum % 10);
            carry = digitSum / 10;
        }
        
        if (carry > 0) {
            sum.append(carry);
        }
        
        return sum.reverse().toString();
    }
    
    public static int getDigit(String number, int index) {
        if (index < number.length()) {
            return Character.getNumericValue(number.charAt(number.length() - 1 - index));
        }
        return 0;
    }
}
