# -*- coding: utf-8 -*-

import re 
a = """ 






<ul>


<li>2</li>

<li>Jai ho</li>
<li>4</li>

<li>5</li>

<li>HImanshu</li>
</ul>
<li>1</li>










"""




p = a.splitlines()
ans = '' 
for i in range(len(p)):
	if len(p[i]) == 0:
		continue 
	x = p[i].strip()
	ans += x 

# to remove the spaces between any " >    < " ..... since spliting happens arount extra spaces .... 
#ans = re.sub(r'\s+([<"])', r'\1', ans)	
ans = re.sub(r'\s+([<"])', r'\1', ans)	
#print ans

#print '\n\nremoving the spaces ....... ++++++++ inserting \ for escape characters \n'


# for removing the spaces between any 'name ="....."  name .... Since the spiliting happens around spaces/tabs also ...   
final = ''
l = len(ans) 
i = 0 
while(i < l):
	if ans[i] == '"' :
		final += ans[i]
		while(1):
			i = i + 1
			if ans[i] == '"' :
				final += ans[i]
				break

	  		if i+1 < l and ans[i+1] == "'": 
	  			final += ans[i]
	  			final += '\\' 
				continue

			if ans[i] == ' ' : 
				if ans[i+1].isalpha() :
					final += ans[i]
					continue 
				else : 
				 	continue 

			final += ans[i]
	else : 
	  	# for making apostrophe as an escape character e.g making ' it's ---> it\'s '  
	  	if i+1 < l and ans[i+1] == "'": 
	  		final += ans[i]
	  		final += '\\' 
	  	else :
			final += ans[i]
	i = i + 1

print final 
