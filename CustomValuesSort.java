import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Scanner;
public class CustomValuesSort<T>{
    private static int questionNum = 1;
    public static <T> T[] customSort(T[] inputElements){
        return customSort(0, inputElements.length, inputElements);
    }
    private static <T> T[] customSort(int i, int j, T[] inputElements){
        T[] goal;
        if(i + 1 == j){
            goal = (T[]) Array.newInstance(inputElements.getClass().getComponentType(), j - i);
            goal[0] = inputElements[i];
            return goal;
        }
        int mid = (i + j)/2;
        T[] right = customSort(i, mid, inputElements);
        T[] left = customSort(mid, j, inputElements);
        goal = mergeSortedArraysCustom(left, right);
        return goal;
    }
    /*
     * 
     * 
    */
    public static <T> T[] mergeSortedArraysCustom(T[] array1, T[] array2){
        T[] goal = (T[]) Array.newInstance(array1.getClass().getComponentType(), array1.length + array2.length);;
        int array1Pointer = 0;
        int array2Pointer = 0;
        while(array1Pointer != array1.length && array2Pointer != array2.length){
            String element1 = array1[array1Pointer].toString();
            String element2 = array2[array2Pointer].toString();
            System.out.println("Question " + questionNum + "\nDo you rank " + element1 + " or " + element2 + " higher?");
            Scanner scanner = new Scanner(System.in);
            String userInput = scanner.nextLine();
            if(userInput.equals(element1)){
                goal[array1Pointer + array2Pointer] = array1[array1Pointer];
                array1Pointer++;
            }else if(userInput.equals(element2)){
                goal[array1Pointer + array2Pointer] = array2[array2Pointer];
                array2Pointer++;
            }else{
                System.out.println("'" + userInput + "' does not seem to match either option.\nTry again?");
                questionNum--;
            }
            questionNum++;
        }
        while(array1Pointer != array1.length){
            goal[array1Pointer + array2Pointer] = array1[array1Pointer];
                array1Pointer++;
        }
        while(array2Pointer != array2.length){
            goal[array1Pointer + array2Pointer] = array2[array2Pointer];
                array2Pointer++;
        }
        return goal;
    }
    public static void main(String[] args){
        System.out.println("Enter in your values");
        Scanner scanner = new Scanner(System.in);
        String[] userInput = scanner.nextLine().split(" ");
        String[] goal = customSort(Arrays.stream(userInput).toArray(String[]::new));
        System.out.println("\nHere are the following orders:");
        for(int i = 0; i != goal.length; i++){
            System.out.println((i + 1) + ". " + goal[i]);
        }
    }
}