#include <iostream>
#include <iomanip>
#include <math.h>
#include <string>
#include <sstream>
#include <stdlib.h>
using namespace std;

float calcMonthlyPay(float apr, float yrs, float amt)
{
//M = P * (J / (1 - ((1 + J)^-N)))
 apr = apr/100;
 float mr = apr/12;
 float numP = yrs*12; 
 float result = floor((amt*mr)/(1 - pow((1 + mr),(-1*numP)))*100)/100;
 cout << "number of payments: " << numP << endl;
 cout << "result: " << result << endl;
 return result;
}
void buildHTML(float result, float apr, float yrs, float amt)
{
  cout << "Content-type:text/html\r\n\r\n";
  cout << "<!DOCTYPE html><html><head><meta charset=\"UTF-8\">"
  << "<link rel=\"stylesheet\"type=\"text/css\""
  << " href=\"/~tscott8/assign04.css\"/><title>Mortage Calculator</title>"
  << "<script type=\'text/javascript\'>function validateForm() {"
  << "var helperMsg = \"Please enter a legal value for \"; "
  << "var APR = document.getElementById(\"APR\");"
  << "if (!APR.value.length | isNaN(APR.value)){alert(helperMsg + \"APR\");"
  << "APR.focus();return false;}"
  << "var loanTerm = document.getElementById(\"loanTerm\");"
  << "if (!loanTerm.value.length | isNaN(loanTerm.value)) {"
  << "alert(helperMsg  + \"loanTerm\");loanTerm.focus();return false;}"
  << "var loanAmt = document.getElementById(\"loanAmt\");"
  << "if (!loanAmt.value.length | isNaN(loanAmt.value)) {"
  << "alert(helperMsg + \"loanAmt\");loanAmt.focus();return false;}"
  << "return true;  }function setFocus() {"
  << "document.getElementById(\"APR\").focus();}</script></head>";
  cout << "<body onload=\"setFocus()\"><div id=\"calculator\"><br>"
  << "<form name=\"calc\" method=\"get\" "
  << "action=\"http://localhost/cgi-bin/sco10002/assign09\" "
  << "onsubmit=\"return validateForm()\"><table class=\"center\">"
  << "<tr><td><div style=\"text-align:center\">Mortgage Calculator 2.0</div><hr>"
  << "APR:<input type=\"text\" name=\"apr\" id=\"APR\" size=\"6\" "
  << "onfocus=\"this.select()\" required value=" << apr << "><br>"
  << "Loan Term:<input type=\"text\" name=\"yrs\" id=\"loanTerm\" "
  << "size=\"6\" onfocus=\"this.select()\" required value=" << yrs << "><br>"
  << "Loan Amount:<input type=\"text\" name=\"amt\" id=\"loanAmt\" "
  << "size=\"6\" onfocus=\"this.select()\" required value=" << amt << "><br>"
  << "<hr><input type=\"reset\" value=\"Clear\" onclick=\"window.history.back()\">"
  << "<input type=\"submit\" value=\"Calculate Mortgage\"></td></tr><tr>"
  << "<td><p>Resultant Mortgage: $ " << result << " <br></p></td></tr></table>"
  << "</form><br></div></body></html>";
}
int main()
{
  string queryString = getenv("QUERY_STRING");
  stringstream ss1(queryString);
  string split[3];
  for (int i = 0; i < 3; i++)
  {
    getline(ss1, split[i], '&');
    stringstream ss2(split[i]);
    getline(ss2, split[i], '=');
    getline(ss2, split[i]);
  }

  float apr = atof(split[0].c_str());// = APR;
  float yrs = atof(split[1].c_str());// = loanTerm;
  float amt = atof(split[2].c_str());// = loanAmt;

  float result = calcMonthlyPay(apr, yrs, amt);
  buildHTML(result, apr, yrs, amt);
  return 0;
}
