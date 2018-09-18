/*flow*/
let S = "goodgoogle"
let T = "google"
function index(S:string,T:string,pos:number){
    let i = pos; /*i 用于主串 S 中当前位置下标，若 post 不为 1,则从 pos 位置开始匹配*/
    let j = 0; /* j 用于子串 T 中当前位置下标值*/
    Slength = S.length;
    Tlength = T.length;
    while(i<=Slength && j<=Tlength){ /*若 i 小于 S 长度且 j 小于 T 的长度时循环*/
        if(S[i]==T[j]){
            ++i;
            ++j;
        }else{
            i=i-j+1;
            j=0;
        }
    }
}