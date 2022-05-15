<?php
                if (($_POST['username']=='g211210011@sakarya.edu.tr')&&($_POST['password']=='g211210011'))
                {
                    echo"Hoşgeldiniz'g211210011'<br> <br>";
                    echo'Ana Sayfaya Devam Etmek İçin ';   
                    echo'<a href="Anasayfa.html">Tıklayın</a>' ;          
                }
                else{
                    echo"<strong>Yanlış Bilgi Girmişsiniz!!</strong> <br> <br> <strong>Giriş Sayfasına Yönlendireceksiniz.</strong>";
                    header("Refresh:3; url=login.html");
                }

            ?>