            var dbref = firebase.database().ref("/");
            function getToyName() {return $('#enterName').val()};
            $('#submitInfo').click(function () {
                dbref.child("Toys/" + getToyName()).update({
                    Name:$('#enterName').val(),
                    Age_Max:$('#enterMax').val(),
                    Age_Min:$('#enterMin').val(),
                    Price:$('#enterPrice').val(),
                    Description:$('#enterDescription').val()
                });
            })
