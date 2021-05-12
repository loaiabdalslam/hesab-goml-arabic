    nature_goml={}
    nature_goml['']=''
    nature_goml['ا']='light'
    nature_goml['ء']='light'
    nature_goml['أ']='light'
    nature_goml['ٱ']='light'
    nature_goml['إ']='light'
    nature_goml['ئ']='light'
    nature_goml['ؤ']='light'


    nature_goml['ب']='dark'
    nature_goml['آ']='dark'
    nature_goml['ج']='water'
    nature_goml['د']='air'

    nature_goml['ه']='fire'
    nature_goml['ة']='fire'

    nature_goml['و']='soil'
    nature_goml['ز']='light'
    nature_goml['ح']='dark'
    nature_goml['ط']='water'

    nature_goml['ى']='air'
    nature_goml['ي']='air'

    nature_goml['ك']='fire'
    nature_goml['ل']='soil'
    nature_goml['م']='light'
    nature_goml['ن']='dark'
    nature_goml['س']='water'
    nature_goml['ع']='air'
    nature_goml['ف']='fire'
    nature_goml['ص']='soil'


    nature_goml['ق']='light'
    nature_goml['ر']='dark'
    nature_goml['ش']='water'
    nature_goml['ت']='air'
    nature_goml['ث']='fire'
    nature_goml['خ']='soil'

    nature_goml['ذ']='light'
    nature_goml['ض']='dark'
    nature_goml['ظ']='water'
    nature_goml['غ']='air'



    //--------------------------------------------------------------------------------
    numbers_goml_small_balance = {}
    numbers_goml_small_balance['ا']=5
    numbers_goml_small_balance['ء']=5
    numbers_goml_small_balance['أ']=5
    numbers_goml_small_balance['ٱ']=5
    numbers_goml_small_balance['إ']=5
    numbers_goml_small_balance['ئ']=5
    numbers_goml_small_balance['ؤ']=5


    numbers_goml_small_balance['ب']=5
    numbers_goml_small_balance['آ']=5
    numbers_goml_small_balance['ج']=5
    numbers_goml_small_balance['د']=5
    numbers_goml_small_balance['ه']=5
    numbers_goml_small_balance['ة']=5
    numbers_goml_small_balance['و']=5



    numbers_goml_small_balance['ز']=4
    numbers_goml_small_balance['ح']=4
    numbers_goml_small_balance['ط']=4
    numbers_goml_small_balance['ى']=4
    numbers_goml_small_balance['ي']=4
    numbers_goml_small_balance['ك']=4
    numbers_goml_small_balance['ل']=4



    numbers_goml_small_balance['م']=3
    numbers_goml_small_balance['ن']=3
    numbers_goml_small_balance['س']=3
    numbers_goml_small_balance['ع']=3
    numbers_goml_small_balance['ف']=3
    numbers_goml_small_balance['ص']=3


    numbers_goml_small_balance['ق']=2
    numbers_goml_small_balance['ر']=2
    numbers_goml_small_balance['ش']=2
    numbers_goml_small_balance['ت']=2
    numbers_goml_small_balance['ث']=2
    numbers_goml_small_balance['خ']=2

    numbers_goml_small_balance['ذ']=1
    numbers_goml_small_balance['ض']=1
    numbers_goml_small_balance['ظ']=1
    numbers_goml_small_balance['غ']=1



    natures_in_arabic = {'light':'النور','dark':'الظلام','water':'الماء','air':'الهواء','fire':'النار','soil':'التراب'}

    function calculate_nature_of_chars(numbers_goml_small_balance,nature_goml,text){
        str = normalize_text(text)
        str = str.replace(/\s/g, '');
        natures = {'light':0,'dark':0,'water':0,'air':0,'fire':0,'soil':0}


        for (var i = 0; i < str.length; i++) {
            try{

                natures[nature_goml[str[i]]] += (((i+1)*numbers_goml_small_balance[str[i]]))

            }catch{
            }
        }
        return natures

    }




    



    function normalize_text(text) {

        var withoutDiacs = text.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '');
        return withoutDiacs
    }

