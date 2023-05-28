package main.java.dataAccessLayer;

import java.util.ArrayList;

public class University {
    private String name;
    private ArrayList<String> departments;
    private boolean scholarship;
    private boolean admissionTest;
    private int monthlyPayment;

    public University(String name, ArrayList<String> departments, boolean scholarship, boolean admissionTest, int monthlyPayment) {
        this.name = name;
        this.departments = departments;
        this.scholarship = scholarship;
        this.admissionTest = admissionTest;
        this.monthlyPayment = monthlyPayment;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<String> getDepartments() {
        return departments;
    }

    public void setDepartments(String department) {
        this.departments.add(department);
    }

    public boolean isScholarship() {
        return scholarship;
    }

    public void setScholarship(boolean scholarship) {
        this.scholarship = scholarship;
    }

    public boolean isAdmissionTest() {
        return admissionTest;
    }

    public void setAdmissionTest(boolean admissionTest) {
        this.admissionTest = admissionTest;
    }

    public int getMonthlyPayment() {
        return monthlyPayment;
    }

    public void setMonthlyPayment(int monthlyPayment) {
        this.monthlyPayment = monthlyPayment;
    }

    public ArrayList<String> convertStringtoList(String departments){

    }
}
