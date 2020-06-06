$(document).ready(function(){
    let currentQuiz = null;                    //建立currentQuiz，儲存目前作答到第幾題
    let score = 0;
    $("#startButton").click(function(){
        if(currentQuiz == null){               //如果還沒有作答就從這裡開始
            currentQuiz = 0;                   //假設目前作答到第0題
            $("#question").text(questions[0].question); //顯示題目
            $("#options").empty();                      //清空選項區域
            for (let x = 0;x<questions[0].answers.length;x++){    //加入選項
                $("#options").append(
                    "<input name='options'  type='radio' value=" + x + 
                    "<label>" + questions[0].answers[x][0] + "</label><br><br>"
                );
            }
            $("#startButton").attr("value","Next");  //將文字按鈕換成Next或下一題
        }else{       //如果已經開始作答就從這裡開始
            $.each(  //網頁中每一個radio都來看一看，巡訪每個選項是否被選取
                $(":radio"),function(i,val){  //i表示index，val表示那一項的值
                    if(val.checked){          //如果這個選項被選取
                        if(currentQuiz==questions.length-1){  //分成是否已經產生最終結果(A~D)
                            score += questions[currentQuiz].answers[i][1];  
                            console.log("score:"+score);
                            if(score > 7){
                                $("#question").text("答對8題以上"); //顯示最終成果的標題
                                $("#options").empty();
                                $("#options").append("你總共答對了"+score+"題，"+finalAnswers["A"][0] + "<br><br>"); 
                            }else if(score>=4 && score <=7){
                                $("#question").text("答對4~7題之間"); //顯示最終成果的標題
                                $("#options").empty();
                                $("#options").append("你總共答對了"+score+"題，"+finalAnswers["B"][0] + "<br><br>"); 
                            }else{
                                $("#question").text("答對3題以下"); //顯示最終成果的標題
                                $("#options").empty();
                                $("#options").append("你總共答對了"+score+"題，"+finalAnswers["C"][0] + "<br><br>"); 
                            } 
                            currentQuiz = null;                          //清空答題數
                            score = 0;
                            $("#startButton").attr("value","Restart");  //修改按鈕為重新開始
                        }else{    //繼續作答時
                            //指定下一個要顯示的題目，原始資料是從一開始，所以要-1
                            score += questions[currentQuiz].answers[i][1];  
                            currentQuiz++; 
                            $("#question").text(questions[currentQuiz].question);  //顯示新的題目
                            $("#options").empty();
                            for(let x = 0;x < questions[currentQuiz].answers.length;x++){  //顯示新的選項題目
                                $("#options").append(
                                "<input name = 'options' type = 'radio' value = " + x + "<label>" + 
                                questions[currentQuiz].answers[x][0]+"</label><br><br>"
                            );
                            }       
                        }
                        return false; //完成後即跳離迴圈
                    }
                }
            ); 
        }
    });
});




