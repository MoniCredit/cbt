<!DOCTYPE html>
<html>
    <head>
        <?php  

        // error_reporting(E_ALL);
        // ini_set('error_reporting', E_ALL);

        $url = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
        $dir = basename(__DIR__);
        $pgname = "Add Test";
        require_once('../_inc/inc_head.php');
        require_once ('../_inc/phpexcel/PHPExcel/IOFactory.php');
        ?>	
    </head>

    <body>

        <div id="wrapper">
            <?php require_once('_inc/inc_topnav.php'); ?>
            <?php require_once('_inc/inc_sidebar.php'); ?>
            <?php
                if (isset($_GET['ass'])) {
                    $ass_id = $_GET['ass'];
                }

                $post_url = $_SERVER['PHP_SELF'].'?ass='.$ass_id;
                $msg = '';
                
                $ass_code = nameId('id', 'id', 'assessments', $ass_id);
                $ass_name = nameId('id', 'assessments_name', 'assessments', $ass_id);
        
            if (isset($_POST["submit_question"])) {
                
                $minLength = 1;
                $maxLength = 3;
                $randomNumber = str_pad(mt_rand(0, pow(10, $maxLength) - 1), $minLength, '0', STR_PAD_LEFT);
                $q_id = $ass_id."-".$randomNumber;

                $msg = $_POST; 


                $prep_query = sprintf("INSERT INTO questions (id, test_id, question, choice1, choice2, choice3, choice4, answer)  "
                . "VALUES ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')", 
                test_input($q_id),
                test_input($ass_id),
                test_input($_POST["question"]),
                test_input($_POST["ans1_hidden"]),
                test_input($_POST["ans2_hidden"]),
                test_input($_POST["ans3_hidden"]),
                test_input($_POST["ans4_hidden"]),
                test_input($_POST["answer"])
                );
                $users = mysqli_query($dbc, $prep_query);
            } // end import_test 
           
            ?>
            <!-- /.navbar-static-side -->

            <div id="page-wrapper">

                <div class="row">
                    <div class="col-lg-12">
                        <h4>Add queston to test</h4>
                    </div>
                    <!-- /.col-lg-12 -->
                </div>

               
            
            <?php if (isset($_GET['ass'])) { ?>

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Add Question
                            
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">

                        <form action="<?php echo $post_url; ?>" method="post">

                        <textarea name="question" id="question" cols="30" rows="10" required></textarea>
                        <input type="hidden" required name="ans1_hidden" id="ans1_hidden"> 
                        <input type="hidden" required name="ans2_hidden" id="ans2_hidden"> 
                        <input type="hidden" required name="ans3_hidden" id="ans3_hidden"> 
                        <input type="hidden" required name="ans4_hidden" id="ans4_hidden"> 

                        <br><br> 
                        <div id="ans1" name="ans1" contenteditable="true" class="form-control">
                            <h4>Enter text here</h4>
                        </div><br><br> 

                        <div
                            id="ans2"
                            name="ans2"
                            contenteditable="true"
                            class="form-control"
                        ><h4>Enter text here</h4></div><br><br> 

                        <div
                            id="ans3"
                            name="ans3"
                            contenteditable="true"
                            class="form-control"
                        ><h4>Enter text here</h4></div><br><br> 

                        <div
                            id="ans4"
                            name="ans4"
                            contenteditable="true"
                            class="form-control"
                        ><h4>Enter text here</h4></div><br><br> 

                        <p>Answer</p>

                        <input type="radio" id="option1" name="answer" value="1" required>
                        <label for="option1">Choice 1</label><br>
                        
                        <input type="radio" id="option2" name="answer" value="2" required>
                        <label for="option2">Choice 2</label><br>
                        
                        <input type="radio" id="option3" name="answer" value="3" required>
                        <label for="option3">Choice 3</label><br>

                        <input type="radio" id="option4" name="answer" value="4" required>
                        <label for="option3">Choice 4</label><br>

                        <button class="btn btn-primary" type="submit" name="submit_question">Submit</button>
                        
                        </form>
                      
                        </div>
                        <!-- /.panel-body -->
                    </div> 



<?php } ?>
            </div>
        <?php require_once('footer_bar.php'); ?>

            <!-- /#page-wrapper -->

        </div>
        <!-- /#wrapper -->

        <!-- Core Scripts - Include with every page -->
<?php require_once('../_inc/inc_js.php'); ?>

<script src="../ckeditor/ckeditor.js"></script>


<script>
        CKEDITOR.replace("question");
        CKEDITOR.disableAutoInline = true;
        CKEDITOR.inline("ans1");
        CKEDITOR.inline("ans2");
        CKEDITOR.inline("ans3");
        CKEDITOR.inline("ans4");

</script>

<script>
                                document.querySelector('#ans1').addEventListener('input', function() {
                                    document.querySelector('#ans1_hidden').value = this.innerHTML;
                                });
                                document.querySelector('#ans2').addEventListener('input', function() {
                                    document.querySelector('#ans2_hidden').value = this.innerHTML;
                                });
                                document.querySelector('#ans3').addEventListener('input', function() {
                                    document.querySelector('#ans3_hidden').value = this.innerHTML;
                                });
                                document.querySelector('#ans4').addEventListener('input', function() {
                                    document.querySelector('#ans4_hidden').value = this.innerHTML;
                                });
                        </script>
 <script>
        function loadm() {
            
        };
        $(document).on("click", ".addQ", function() {
            var row = $(this).closest('tr');
            var tsanme = row.find(".tsname").text();
            $(".tnm").text(tsanme);
            
            var tsid = $(this).closest('td').data('id');
             $("input[name='test_id']").val(tsid);
             
            $('#addQModal').modal('show');
        });   
        var td;      
    
    // $(document).on("click", ".logout", function() {
                 
    //         td = $(this).parent().prev().prev('td');
    //         var userid = $(this).data('value');
            
    //         $.ajax({
    //             type: "POST",
    //             url: "../students/_inc/process.php",
    //             data: {logoutusid: userid},
    //             success: function (data) {
    //                 td.html(data)
    //             },
    //             error: function (exception) {
    //                 alert('error connecting to server');
    //             }
    //         });
    //     });
     
     var ass_code = $('#assid').data('code'); 
     function logoutall(){
         $.ajax({
                type: "POST",
                url: "../students/_inc/process.php",
                data: {logoutall: 'yes', ass_code: ass_code},
                success: function (data) {
                   alert('all users logout sucessful');
                },
                error: function (exception) {
                    alert('error connecting to server');
                }
            });         
     }
    $(document).on("click", "#logoutall", function() {
       logoutall(); 
    });
    
     
        window.onload = function () {
        var ass_id = $('#assid').data('value');  
        var ass_code = $('#assid').data('code');  
        //alert(ass_id);
        var counttype;
            function countuser(counttype, ass_id){
                var counttype = counttype;
                $.ajax({
                    type: "POST",
                    url: "../students/_inc/process.php",
                    data: {counttype: counttype, assid: ass_id, ass_code: ass_code },
                    success: function (data) {
                        $('#'+counttype).html(data);
                        var countfinish = $('#countfinish').html();
                        var countassusers = $('#countassusers').html();
                        var  waiting = (countassusers - countfinish );
                        $('#countwaiting').html(waiting)
                    },
                    error: function (exception) {
                        //alert('error connecting to server');
                    }
                });
            };


           setInterval(function () { countuser('countfinish', ass_id); }, 5000); 
        //    setInterval(function () { countuser('countacitve', ass_id); }, 5000); 
        //   setInterval(function () { countuser('countassusers', ass_id); }, 60000);            
         };

        

        var ass_id = $('#assid').data('value');
        function endexamall(ass_id){
         $.ajax({
                type: "POST",
                url: "../students/_inc/process.php",
                data: {endexamall: 'yes', ass_id: ass_id },
                success: function (data) {
                   alert(data);
                }
            });         
     }
    $(document).on("click", "#endexamall", function() {
       endexamall(ass_id); 
    });
    </script>

    <script>
            $(".edittest").click(function(){

                var row = $(this).closest('tr');
                
                $("input[name='TName']").val(row.find(".tsname").text());
                $("input[name='NOQ']").val(row.find(".NOQ").text());
               
                var time = row.find(".time").text();
                    timer = time.slice(0, -4)
                $("input[name='time']").val(timer);

                $("input[name='test_mark']").val(row.find(".test_mark").text());
                $(".titlea").text('Edit Test ');

                var tsid = $(this).closest('td').data('id');
                $("input[name='test_id']").val(tsid);
            })

            $(".AddTest").click(function(){
                
                $("input[name='TName']").val('');
                $("input[name='NOQ']").val('');
                $("input[name='time']").val('');
                $("input[name='test_mark']").val('');
                $("input[name='test_id']").val('0');
            })

            $(".edit_time").click(function(){
                
                $("input[name='TName']").val('');
                $("input[name='NOQ']").val('');
                $("input[name='time']").val('');
                $("input[name='test_mark']").val('');
                $("input[name='test_id']").val('0');
            })

//         $(document).on('click', '.edittime', function() {
// //alert('djdj');
// })

        </script>

        <?php if(ISSET($_GET['edittime'])){ ?>
        <script>
            $('#EditTime').modal('show');
        </script>
        <?php } ?>
        <?php mysqli_close($dbc); ?>
        </body>
</html>
