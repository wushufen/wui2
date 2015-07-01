
<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  <title>Page not found at /widgets.js</title>
  <meta name="robots" content="NONE,NOARCHIVE">
  <style type="text/css">
    html * { padding:0; margin:0; }
    body * { padding:10px 20px; }
    body * * { padding:0; }
    body { font:small sans-serif; background:#eee; }
    body>div { border-bottom:1px solid #ddd; }
    h1 { font-weight:normal; margin-bottom:.4em; }
    h1 span { font-size:60%; color:#666; font-weight:normal; }
    table { border:none; border-collapse: collapse; width:100%; }
    td, th { vertical-align:top; padding:2px 3px; }
    th { width:12em; text-align:right; color:#666; padding-right:.5em; }
    #info { background:#f6f6f6; }
    #info ol { margin: 0.5em 4em; }
    #info ol li { font-family: monospace; }
    #summary { background: #ffc; }
    #explanation { background:#eee; border-bottom: 0px none; }
  </style>
</head>
<body>
  <div id="summary">
    <h1>Page not found <span>(404)</span></h1>
    <table class="meta">
      <tr>
        <th>Request Method:</th>
        <td>GET</td>
      </tr>
      <tr>
        <th>Request URL:</th>
      <td>http://platform.twitter.com/widgets.js</td>
      </tr>
    </table>
  </div>
  <div id="info">
    
      <p>
      Using the URLconf defined in <code>kitobim.urls</code>,
      Django tried these URL patterns, in this order:
      </p>
      <ol>
        
          <li>
            
                ^$
                [name='home']
            
          </li>
        
          <li>
            
                ^library/$
                [name='books']
            
          </li>
        
          <li>
            
                ^library/latest/$
                [name='books.latest']
            
          </li>
        
          <li>
            
                ^library/popular/$
                [name='books.popular']
            
          </li>
        
          <li>
            
                ^category/(?P&lt;hash&gt;[a-zA-Z0-9]+)$
                [name='category']
            
          </li>
        
          <li>
            
                ^books/(?P&lt;hash&gt;[a-zA-Z0-9]+)$
                [name='book']
            
          </li>
        
          <li>
            
                ^library/books/(?P&lt;object_id&gt;.*)/read/$
                [name='book.read']
            
          </li>
        
          <li>
            
                ^books/(?P&lt;hash&gt;[a-zA-Z0-9]+)/sample/$
                [name='book.download-sample']
            
          </li>
        
          <li>
            
                ^books/(?P&lt;hash&gt;[a-zA-Z0-9]+)/buy/$
                [name='book.buy']
            
          </li>
        
          <li>
            
                ^books/(?P&lt;hash&gt;[a-zA-Z0-9]+)/rate/$
                [name='book.rate']
            
          </li>
        
          <li>
            
                ^books/(?P&lt;hash&gt;[a-zA-Z0-9]+)/thanks/$
                [name='book.thanks']
            
          </li>
        
          <li>
            
                ^authors/$
                [name='authors']
            
          </li>
        
          <li>
            
                ^authors/(?P&lt;hash&gt;.*)$
                [name='author']
            
          </li>
        
          <li>
            
                ^account/$
                [name='kitobim.user.profile']
            
          </li>
        
          <li>
            
                ^search/$
                [name='kitobim.search']
            
          </li>
        
          <li>
            
                
                
            
                ^user/signin/$
                [name='user.signin']
            
          </li>
        
          <li>
            
                
                
            
                ^user/signout/$
                [name='user.signout']
            
          </li>
        
          <li>
            
                
                
            
                ^user/signup/$
                [name='user.signup']
            
          </li>
        
          <li>
            
                
                
            
                ^user/signup/confirm/$
                [name='user.signup-confirm']
            
          </li>
        
          <li>
            
                
                
            
                ^user/signup/success/$
                [name='user.signup-success']
            
          </li>
        
          <li>
            
                
                
            
                ^user/confirm/(?P&lt;key&gt;\w+)/$
                [name='user.email-confirm']
            
          </li>
        
          <li>
            
                
                
            
                ^user/signup/complete/$
                [name='user.signup-complete']
            
          </li>
        
          <li>
            
                
                
            
                ^user/signup/done/$
                [name='user.signup-done']
            
          </li>
        
          <li>
            
                
                
            
                ^user/password/reset/$
                [name='user.password-reset']
            
          </li>
        
          <li>
            
                
                
            
                ^user/password/reset/sent/$
                [name='user.password-reset.sent']
            
          </li>
        
          <li>
            
                
                
            
                ^user/password/phone/reset/$
                [name='user.phone.password-change']
            
          </li>
        
          <li>
            
                
                
            
                ^user/password/email/reset/(?P&lt;key&gt;\w+)/$
                [name='user.email.password-change']
            
          </li>
        
          <li>
            
                
                
            
                ^account/password/change/$
                [name='user.password']
            
          </li>
        
          <li>
            
                
                
            
                social/
                
            
          </li>
        
          <li>
            
                ^pages/
                
            
          </li>
        
          <li>
            
                ^ckeditor/
                
            
          </li>
        
          <li>
            
                ^autocomplete/
                
            
          </li>
        
          <li>
            
                ^payments/
                
            
          </li>
        
          <li>
            
                ^api/0.0.9/
                
            
          </li>
        
          <li>
            
                ^admin/
                
            
          </li>
        
          <li>
            
                ^media\/(?P&lt;path&gt;.*)$
                
            
          </li>
        
          <li>
            
                ^__debug__/
                
            
          </li>
        
      </ol>
      <p>The current URL, <code>widgets.js</code>, didn't match any of these.</p>
    
  </div>

  <div id="explanation">
    <p>
      You're seeing this error because you have <code>DEBUG = True</code> in
      your Django settings file. Change that to <code>False</code>, and Django
      will display a standard 404 page.
    </p>
  </div>
</body>
</html>
