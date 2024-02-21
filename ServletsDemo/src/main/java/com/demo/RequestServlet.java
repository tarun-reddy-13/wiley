package com.demo;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

import java.io.*;
@WebServlet("/RegisterServlet")
public class RequestServlet extends HttpServlet {
	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException{
			res.setContentType("text/html");
			PrintWriter out = res.getWriter();
			out.print("<h1>Your Document is READY</h1>");
			String name = req.getParameter("user_name");
			String password = req.getParameter("user_password");
			String email = req.getParameter("user_email");
			String gender = req.getParameter("user_gender");
			String course = req.getParameter("user_course");
			String condition = req.getParameter("condition");
			
			WordDoc w = new WordDoc();
			w.createDoc(name, password, email, gender, course);
	}
	
}
