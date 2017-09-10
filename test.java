/**
 * @Author : Ali Can Kuştemur
 * * @Date : 24 May 2015
 * * @File_Name : InstanceOf.java
 * * @Blog : http://alicankustemur.github.io
 */
class Ford {
    int weight, model;
}

class Volkswagen {
    int weight, model;
}

class GT extends Ford {
    int speed;
}

class Mustang extends Ford {
    int speed;
}

class InstanceOf {
    public static void main(final String args[]) {
        final Ford car = new Ford();
        final Volkswagen car1 = new Volkswagen();
        final GT car2 = new GT();
        final Mustang car3 = new Mustang();
        if (car instanceof Ford) {
            System.out.println("car örnek referansı ," + " Ford sınıf tipinin bir örneğidir.");
        }
        if (car1 instanceof Volkswagen) {
            System.out.println("car1 örnek referansı ," + " Volkswagen sınıf tipinin bir örneğidir.");
        }
        if (car2 instanceof GT) {
            System.out.println("car2 örnek referansı ," + " GT sınıf tipinin bir örneğidir.");
        }
        if (car3 instanceof Mustang) {
            System.out.println("car3 örnek referansı ," + " Mustang sınıf tipinin bir örneğidir.");
        }
        if (car instanceof GT) {
            System.out.println("car örnek referansı ," + " GT sınıf tipine dönüştürülebilir.");
        }
        System.out.println();
        Ford newCar;
        newCar = car3;
        if (newCar instanceof Mustang) {
            System.out.println("newCar örnek referansı ," + " Mustang sınıf tipinin bir örneğidir.");
        }
        newCar = car2;
        if (newCar instanceof GT) {
            System.out.println("newCar örnek referansı ," + " GT sınıf tipinin bir örneğidir.");
        }
        if (newCar instanceof Mustang) {
            System.out.println("newCar örnek referansı ," + " Mustang sınıf tipine dönüştürülebilir.");
        } else {
            System.out.println("newCar örnek referansı ," + " Mustang sınıf tipine dönüştürülemez!");
        }
        if (newCar instanceof Ford) {
            System.out.println("newCar örnek referansı ," + " Ford sınıf tipine dönüştürülebilir.");
        }
    }
}