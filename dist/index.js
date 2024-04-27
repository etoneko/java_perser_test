import { parse } from "java-parser";
const javaText = `
public class Person {

  private String name;
  private int age;

  public void sleep(){
      System.out.println("zzz");
  }

  public void introduce(){
      System.out.println("I am " + this.name);
  }

  public void sayHi(String whom){
      System.out.println("Hello " + whom);
  }

  // this method must not be used.
  @Deprecated
  public void xxx(){
  }
}
`;
const cst = parse(javaText);
console.log(cst);
// explore the CST
//# sourceMappingURL=index.js.map