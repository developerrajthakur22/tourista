package com.Tourista.Exceptions;

public class InvalidTicketException extends Exception {
	public InvalidTicketException() {
		super(); 
	}
	
	public InvalidTicketException(String message) {
		super(message); 
	}
}
