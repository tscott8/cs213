<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="studentList">
<html>
  <head>
    <style>
      body {
      background-color: lavender;
      margin-left:10%;
      margin-right:10%;
      width: 80%;
      }
      table{
      width:100%;
      border: 3px solid black;
      border-radius: 5px;
      }
      table tr th {
      padding:10px;
      text-align:left;
      color: white;
      background-color: Black;
      }
      table tr,td {
      padding:10px;
      border-collapse: collapse;
      border: 1px solid black;           
      }
    </style>
  </head>
<body>  
  <h2 style="text-align:center">Student Database</h2>
  <table>
    <tr>
      <th>Student</th>
      <th>Location</th>
      <th>College</th>
      <th>Department</th>
      <th>Major</th>
    </tr>
      <xsl:for-each select="student">
    <tr>
        <td>
            <xsl:for-each select="name">
              <xsl:value-of select="first"/><xsl:text> </xsl:text>
              <xsl:value-of select="middle"/><xsl:text> </xsl:text>
              <xsl:value-of select="last"/>
            </xsl:for-each>
          </td>
        <td>
          <xsl:for-each select="location">
              <xsl:value-of select="city"/>,<xsl:text> </xsl:text>
              <xsl:value-of select="state"/>
          </xsl:for-each>        
        </td>
        <xsl:for-each select="college">    
        <td>
          <xsl:value-of select="./@name"/>
        </td>
          <xsl:for-each select="department">
        <td>
            <xsl:value-of select="./@name"/>
        </td>
        <td>
            <xsl:value-of select="major"/>
        </td>
        </xsl:for-each>
        </xsl:for-each>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
