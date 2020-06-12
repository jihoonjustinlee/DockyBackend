window.onload = function() {

    //function getEventTarget(e) {
    //    e = e || window.event;
   //     return e.target || e.srcElement;
   // }

	// add links here to the resources array. leave array[0] empty 
    var resourcesArray = [ "", "https://www.brighthorizons.com/employer-resources/healthcare-talent-shortage-tips", "https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=12562", "http://www.e-laws.gov.on.ca", "https://www.gov.uk/government/collections/fire-safety-law-and-guidance-documents-for-business", "http://www.hse.gov.uk", 
    "http://www.fpaa.com.au", "http://www.workplaceohs.com.au/hazards/fire-safety/legislation-and-standards", "http://www.dcd.gov.ae/portal/eng/UAEFIRECODE_ENG.pdf", "http://www.iso.org", "http://www.firesafetyservices.co.uk/category/prosecutions", 
    "https://www.nrc-cnrc.gc.ca/eng/publications/codes_centre/2015_national_building_code.html", "https://www.nrc-cnrc.gc.ca/eng/publications/codes_centre/2015_national_fire_code.html", "http://www.cafc.ca/", "http://canadianfiresafety.com", "http://www.fiprecan.ca/", 
    "http://www.canadianindustrialfire.com/canadian_industrial_fire_protection_aboutus.html", "http://legisquebec.gouv.qc.ca/en/showdoc/cs/s-3.4", "http://www.publications.gov.sk.ca/freelaw/documents/English/Regulations/Regulations/F15-11R1.pdf", "http://www.qp.gov.sk.ca/documents/English/Regulations/Repealed/F15001R1.pdf", "http://www.qp.gov.sk.ca/documents/English/Regulations/Regulations/O1-1R1.pdf", 
    "http://www.qp.gov.sk.ca/documents/English/Statutes/Statutes/M36-1.pdf", "http://www.municipalaffairs.alberta.ca/documents/ss/STANDATA/fire/14-FCE-001-Errata.pdf", "https://www.nrc-cnrc.gc.ca/eng/publications/codes_centre/2014_alberta_fire_code.html", "http://www.calgary.ca/CSPS/Fire/Pages/Fire-codes/Fire-codes.aspx", "https://www2.gov.bc.ca/assets/gov/public-safety-and-emergency-services/emergency-preparedness-response-recovery/embc/fire-safety/reg_sys_of_insp_guide.pdf", 
    "http://www.bclaws.ca/EPLibraries/bclaws_new/document/ID/freeside/263_2012", "http://www.bclaws.ca/civix/document/id/complete/statreg/96143_01", "http://www.bccodes.ca/default.aspx?vid=QPLEGALEZE:bccodes_2012_view", "https://www2.gov.bc.ca/gov/content/industry/construction-industry/building-codes-standards", "https://www.justice.gov.nt.ca/en/legislation/", 
    "http://www.nunavutlegislation.ca", "http://www.gov.yk.ca/legislation/acts/fipr.pdf", "http://www.gov.yk.ca/legislation/acts/municipal.pdf", "http://www.gov.yk.ca/legislation/acts/fopr_c.pdf", "https://www.gov.uk/government/collections/fire-safety-law-and-guidance-documents-for-business", 
    "http://www.ul.com", "http://www.cfpa-e.eu", "https://www.europeanfiresafetyalliance.org/", "https://www.nfpa.org/codes-and-standards", "http://www.abi.org.uk",  
    "https://www.kfpa.or.kr/filk/filk_en/index.asp",

    "assets/resources/Fire Log Book example 1 - safetymanagementUK.pdf", "assets/resources/NEMA - The real cost of an electrical fire.pdf", "assets/resources/NFPA 2011 - USTotalCostFactSheet.pdf", 
    "assets/resources/OHS Fire Management 01 - Action Plan.pdf", "assets/resources/Saskatoon example - Fire Safety Plan.pdf", "assets/resources/UK RRFSO Duties.pdf", 
						 ];

    $(".links").click(function() {
        let currentPage = document.getElementById(parent.getPid())
        $(currentPage).css({
            'box-shadow': 'none'
        })

        var targetID = $(this).attr('id');

        $(this).css({
            'box-shadow': 'inset 0 0 100px 100px rgba(255, 255, 255, 0.3)'
        })
        
		window.sessionStorage.pid = targetID; /* set the page with targetID id as the active page*/
        parent.goToPage(targetID);
    });

    $(".menuClose").click(function() {
        console.log("Closing all menus");
        parent.closeAllMenus();
    });

    $(".resourceLinks").click(function() {
        var curLink = $(this).attr('id');
        window.open(resourcesArray[parseInt(curLink)], '_blank');
    });

    $('.menuAccordion').click(function() {
		accordionClicked($(this));
        var scrollToHere = checkTopicNum($(this));
        $('.menunav').animate({
            scrollTop: scrollToHere
        });

    });
};

function checkTopicNum(chosenTopic) {
    var topicNum = chosenTopic.text().substr(chosenTopic.text().length - 1);
    var topOffset = parseInt(topicNum - 1) * 48;
    return topOffset;
}