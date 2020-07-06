var name_text = document.getElementById('name');
var website_link = document.getElementById('website_link');
// website_link.href='javascript:void(0);';
var linkedin_link = document.getElementById('linkedin_link');
// linkedin_link.href='javascript:void(0);';
var twitter_link = document.getElementById('twitter_link');
// twitter_link.href='javascript:void(0);';
var github_link = document.getElementById('github_link');
// github_link.href='javascript:void(0);';
var whatsapp_link = document.getElementById('whatsapp_link');
// whatsapp_link.href='javascript:void(0);';
var instagram_link = document.getElementById('instagram_link');
// instagram_link.href='javascript:void(0);';

let array = ["name","website","linkedin","twitter","github","whatsapp","instagram"];

function void_click(){
    void(0);
}
chrome.storage.sync.get(array,function(links){
    if(!chrome.runtime.error){
        console.log(links);
        if(links.name)
            name_text.innerHTML=links.name+"'s ";
        
        if(links.website)
            website_link.href=links.website;
        else
            website_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        
        if(links.linkedin)
            linkedin_link.href=links.linkedin;
        else
            linkedin_link.addEventListener('click',function(event){
                event.preventDefault();
            });

        if(links.twitter)
            twitter_link.href=links.twitter;
        else
            twitter_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        
        if(links.github)
            github_link.href=links.github;
        else
            github_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        if(links.whatsapp)
            whatsapp_link.href=links.whatsapp;
        else
            whatsapp_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        if(links.instagram)
            instagram_link.href=links.instagram;
        else
            instagram_link.addEventListener('click',function(event){
                event.preventDefault();
            }); 
    }
});