        document.write("<table>");
            document.write("<tr>");
                document.write("<td>");
                    document.write("<strong>Date Today:</strong>"+"&nbsp;"+"&nbsp;"+"&nbsp;");
                document.write("</td>");
                document.write("<td>");
                    document.write(months[dateToday.getMonth()]+"&nbsp;"+dateToday.getDate()+","+"&nbsp;"+dateToday.getFullYear()+"<br>");
                document.write("</td>");
            document.write("</tr>");
            document.write("<tr>");
                document.write("<td>");
                    document.write("<strong>Date Tomorrow:</strong>"+"&nbsp;"+"&nbsp;"+"&nbsp;");
                document.write("</td>");
                document.write("<td>");
                    document.write(months[dateTomorrow.getMonth()]+"&nbsp;"+dateTomorrow.getDate()+","+"&nbsp;"+dateTomorrow.getFullYear()+"<br>");
                document.write("</td>");
            document.write("</tr>");            
        document.write("</table>");
        document.write("<hr>");