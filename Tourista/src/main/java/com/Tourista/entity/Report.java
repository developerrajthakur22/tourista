package com.Tourista.entity;

import com.Tourista.enumtype.EnumReportType;

import jakarta.persistence.Entity;

@Entity
public class Report {
	private int reportId;
	private String reportName;
	private EnumReportType reportType;
	
	

}
