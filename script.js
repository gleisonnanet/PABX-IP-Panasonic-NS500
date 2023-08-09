
function onMenu(elem)	{
	elem.style.visibility = "visible"
}
function offMenu(elem)	{
	elem.style.visibility = "hidden"
}
function onCommand(elem)	{
	elem.style.backgroundColor = "#999999"
}
function offCommand(elem)	{
	elem.style.backgroundColor = "#666666"
}

function showPage(ID){
	var Location="";
	if(ID==1)
		Location="\Buttons_SLT";	//icons used in QRG for SLT
	if(ID==2)
		Location="\Buttons_PT";	//icons used in QRG for PT

		window.open(Location,"","width=400,height=300,location=yes,toolbar=yes,menubar=yes");
}

function showPage2(ID){ //open alert window
	var Location="";
	if(ID==20)	//English (FG)
		Location="\../Notice/Notice_E-FG.html";
	if(ID==21)	//English (UM)
		Location="\../Notice/Notice_E-UM.html";
	if(ID==210) //English (PT PM)
		Location="\../Notice/Notice_E-PTPM.html";
	if(ID==211) //English (PC PM)
		Location="\../Notice/Notice_E-PCPM.html";
	if(ID==212) //English (IP PT)
		Location="\../Notice/Notice_E-IPNG.html";
	if(ID==213) //English (SIP)
		Location="\../Notice/Notice_E-SIP.html";
	if(ID==22)	//Danish (UM)
		Location="\../Notice/Notice_DM-UM.html";
	if(ID==23)	//Finnish (UM)
		Location="\../Notice/Notice_FL-UM.html";
	if(ID==24)	//French (FG)
		Location="\../Notice/Notice_FR-FG.html";
	if(ID==25)	//French (UM)
		Location="\../Notice/Notice_FR-UM.html";
	if(ID==250) //French (PT PM)
		Location="\../Notice/Notice_FR-PTPM.html";
	if(ID==26)	//French (PCPM)
		Location="\../Notice/Notice_FR-PCPM.html";
	if(ID==261)	//French (IP PT)
		Location="\../Notice/Notice_FR-IPNG.html";
	if(ID==27)	//German (FG)
		Location="\../Notice/Notice_G-FG.html";
	if(ID==28)	//German (UM)
		Location="\../Notice/Notice_G-UM.html";
	if(ID==29)	//German (PCPM)
		Location="\../Notice/Notice_G-PCPM.html";
	if(ID==30)	//Italian (FG)
		Location="\../Notice/Notice_JT-FG.html";
	if(ID==31)	//Italian (UM)
		Location="\../Notice/Notice_JT-UM.html";
	if(ID==32)	//Italian (PCPM)
		Location="\../Notice/Notice_JT-PCPM.html";
	if(ID==33)	//Dutch (UM)
		Location="\../Notice/Notice_NL-UM.html";
	if(ID==341)	//Portuguese (FG)
		Location="\../Notice/Notice_PR-FG.html";	
	if(ID==34)	//Portuguese (UM)
		Location="\../Notice/Notice_PR-UM.html";
	if(ID==340) //Portuguese (PT PM)
		Location="\../Notice/Notice_PR-PTPM.html";
	if(ID==35)	//Spanish (FG)
		Location="\../Notice/Notice_SP-FG.html";
	if(ID==36)	//Spanish (UM)
		Location="\../Notice/Notice_SP-UM.html";
	if(ID==360) //Spanish (PT PM)
		Location="\../Notice/Notice_SP-PTPM.html";
	if(ID==37)	//Spanish (PCPM)
		Location="\../Notice/Notice_SP-PCPM.html";
	if(ID==371)	//Spanish (IP PT)
		Location="\../Notice/Notice_SP-IPNG.html";
	if(ID==38)	//Swedish (UM)
		Location="\../Notice/Notice_SW-UM.html";

		window.open(Location,"","width=500,height=270");
}

function showPage100(ID){ //open alert window
	var Location="";
	if(ID==100)	//English (for Index.html)
		Location="\PCVersionNotice/PCVersion-E.html";
	if(ID==101)	//English (for other pages)
		Location="\../PCVersionNotice/PCVersion-E.html";
	if(ID==110)	//Spanish (for Index.html)
		Location="\PCVersionNotice/PCVersion-SP.html";
	if(ID==111)	//Spanish (for other pages)
		Location="\../PCVersionNotice/PCVersion-SP.html";
	if(ID==120)	//Danish (for Index.html)
		Location="\PCVersionNotice/PCVersion-DM.html";
	if(ID==121)	//Danish (for other pages)
		Location="\../PCVersionNotice/PCVersion-DM.html";
	if(ID==130)	//German (for Index.html)
		Location="\PCVersionNotice/PCVersion-G.html";
	if(ID==131)	//Germah (for other pages)
		Location="\../PCVersionNotice/PCVersion-G.html";
	if(ID==140)	//French (for Index.html)
		Location="\PCVersionNotice/PCVersion-FR.html";
	if(ID==141)	//French (for other pages)
		Location="\../PCVersionNotice/PCVersion-FR.html";
	if(ID==150)	//Italian (for Index.html)
		Location="\PCVersionNotice/PCVersion-JT.html";
	if(ID==151)	//Italian (for other pages)
		Location="\../PCVersionNotice/PCVersion-JT.html";
	if(ID==160)	//Dutch (for Index.html)
		Location="\PCVersionNotice/PCVersion-NL.html";
	if(ID==161)	//Dutch (for other pages)
		Location="\../PCVersionNotice/PCVersion-NL.html";
	if(ID==170)	//Portuguese (for Index.html)
		Location="\PCVersionNotice/PCVersion-PR.html";
	if(ID==171)	//Portuguese (for other pages)
		Location="\../PCVersionNotice/PCVersion-PR.html";
	if(ID==180)	//Finnish (for Index.html)
		Location="\PCVersionNotice/PCVersion-FL.html";
	if(ID==181)	//Finnish (for other pages)
		Location="\../PCVersionNotice/PCVersion-FL.html";
	if(ID==190)	//Swedish (for Index.html)
		Location="\PCVersionNotice/PCVersion-SW.html";
	if(ID==191)	//Swedish (for other pages)
		Location="\../PCVersionNotice/PCVersion-SW.html";

		window.open(Location,"","width=600,height=275");
}

function showPage300(ID){ //open alert window
	var Location="";
	if(ID==300)	//English
		Location="\../Notice/Notice_E-SD.html";
	if(ID==310)	//Spanish
		Location="\../Notice/Notice_SP-SD.html";
	if(ID==320)	//German
		Location="\../Notice/Notice_G-SD.html";
	if(ID==330)	//French
		Location="\../Notice/Notice_FR-SD.html";
	if(ID==340)	//Italian
		Location="\../Notice/Notice_JT-SD.html";

		window.open(Location,"","width=500,height=240");
}