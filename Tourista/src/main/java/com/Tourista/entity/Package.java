package com.Tourista.Entity;

import java.util.List;

import com.Tourista.enumtype.EnumPackageName;
import com.Tourista.enumtype.EnumPackageType;

public class Package {
	private int packageId;
	private EnumPackageName packageName;
	private String packageDescription;
	private EnumPackageType packageType;
	
	private Double packageCost;
	
	private List<Booking> booking;

	
}
