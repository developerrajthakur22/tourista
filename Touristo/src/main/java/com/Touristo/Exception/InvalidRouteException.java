package com.Tourista.Exceptions;

public class InvalidRouteException extends Exception {
	public InvalidRouteException() {
		super();
	}
	
	public InvalidRouteException(String message) {
		super(message);
	}
}
