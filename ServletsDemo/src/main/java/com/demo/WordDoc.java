package com.demo;
import org.apache.poi.xwpf.usermodel.ParagraphAlignment;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;

import java.io.*;
public class WordDoc {
	public void createDoc(String name, String password, String email, String gender,String course) throws IOException{
	    String fileName = "C:\\Tarun\\Gitam\\sem_6\\sample.dox";

        try (XWPFDocument doc = new XWPFDocument()) {

            // create a paragraph
            XWPFParagraph p1 = doc.createParagraph();
            p1.setAlignment(ParagraphAlignment.LEFT);

            // set font
            XWPFRun r1 = p1.createRun();
            r1.setBold(true);
            r1.setItalic(true);
            r1.setFontSize(22);
            r1.setColor("00BFFF");
            r1.setFontFamily("New Roman");
            r1.setText("USER DETAILS:");
            
            XWPFParagraph p2 = doc.createParagraph();
            p2.setAlignment(ParagraphAlignment.LEFT);
            
            XWPFRun r2 = p2.createRun();
            r2.setBold(true);
            r2.setItalic(true);
            r2.setFontSize(15);
            r2.setColor("00000");
            r2.setFontFamily("New Roman");
            r2.setText("Name: "+name);
            r2.addBreak();
            r2.setText("Password: "+password);
            r2.addBreak();
            r2.setText("Email: "+email);
            r2.addBreak();
            r2.setText("Gender: "+password);
            r2.addBreak();
            r2.setText("Course: "+course);
            // save it to .docx file
            try (FileOutputStream out = new FileOutputStream(fileName)) {
                doc.write(out);
            }

        }
	}
}
