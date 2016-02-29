<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="bsa">
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
          table tr td ul,li {
            padding:0px;
            list-style-type:none;
          }

        </style>
      </head>
      <body>
        <h2 style="text-align:center">BSA Database</h2>
        <xsl:for-each select="council">
          <h4>Council:<xsl:value-of select="./@councilName"/></h4> 
          <xsl:for-each select="troop">
            <h4>Troop Name: <xsl:value-of select="./@unitName"/> | Troop No.: <xsl:value-of select="./@number"/></h4> 
          <table>
            <tr>
              <th>Scout</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Ranks</th>
              <th>Merit Badges</th>
            </tr>
              <xsl:for-each select="scout"><xsl:sort select="lastName"/>
                <tr>
                  <td><xsl:value-of select="lastName"/>,<xsl:text> </xsl:text><xsl:value-of select="firstName"/></td>
                  <td>
                    <ul>
                      <xsl:for-each select="address">
                        <li>
                          <xsl:value-of select="streetName"/>
                        </li>
                        <li style="display:inline">
                          <xsl:value-of select="city"/>,<xsl:text> </xsl:text>
                        </li>
                        <li style="display:inline">
                          <xsl:value-of select="state"/>
                        </li>
                      </xsl:for-each>
                    </ul>
                  </td>
                  <td><xsl:value-of select="phone"/></td>
                  <td>
                    <ul>
                      <xsl:for-each select="rank"><xsl:sort select="./@dateEarned"/>
                        <li>
                          <xsl:value-of select="."/><xsl:text> </xsl:text><xsl:value-of select="./@dateEarned"/>
                        </li>
                      </xsl:for-each>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <xsl:for-each select="meritBadge"><xsl:sort select="./@dateEarned"/>
                      <li >
                        <xsl:value-of select="."/><xsl:text> </xsl:text><xsl:value-of select="./@dateEarned"/>
                      </li>
                      </xsl:for-each>
                    </ul>
                  </td>
                </tr>
              </xsl:for-each>
           </table>
         </xsl:for-each>
       </xsl:for-each>
    </body>
   </html>
 </xsl:template>
</xsl:stylesheet>
