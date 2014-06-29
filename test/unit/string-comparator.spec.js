describe('module: StringComparator', function () {
	describe('method: compare', function () {
		it('compares two strings and gives back strings added, removed and changed', function () {
			var str1 = 'line 1\n' +
				'line 2\n' +
				'line 3\n' +
				'line 4\n' + 
				'line 5' ;  
			var str2 = 'line 11\n' +
				'line 2\n' +
				'line 30\n' +
				'line 4\n' +
				'line 1\n' +
				'line 5\n';

			var comparator = VWO.StringComparator.create({
				stringA: str1,
				stringB: str2,
				splitOn: '\n'
			});

			comparator.compare();
/*
			expect(comparator.stringsInA).toEqual(['line 1','line 2','line 3','line 4','line 5']);
			expect(comparator.stringsUnchanged).toEqual([
				new VWO.StringComparisonResult('line 1', 0, 04),
				new VWO.StringComparisonResult('line 2', 1, 1),
				//new VWO.StringComparisonResult('line 3', 2, 2),
				new VWO.StringComparisonResult('line 4', 3, 3),
				new VWO.StringComparisonResult('line 5', 4, 5) 
			]);

			expect(comparator.stringsDeletedFromA).toEqual([new VWO.StringComparisonResult('line 3', 2, -1)]);
			expect(comparator.stringsAddedInB).toEqual([
					new VWO.StringComparisonResult('line 11', -1, 0), 
					new VWO.StringComparisonResult('line 30', -1, 2)]
					);

				expect(comparator.diffUnion).toEqual([
					new VWO.StringComparisonResult('line 11', -1, 0), 
					new VWO.StringComparisonResult('line 1', 0, 4), 
					new VWO.StringComparisonResult('line 2', 1, 1), 
					new VWO.StringComparisonResult('line 30', -1,2),
					new VWO.StringComparisonResult('line 3', 2, -1),
					new VWO.StringComparisonResult('line 4', 3, 3), 
					new VWO.StringComparisonResult('line 5', 4, 5)
					]);
*/

		});
	});

	describe('method: compare', function () {
		it('case 2: compares two strings and gives back strings added, removed and changed', function () {
			var str1 = '<div class="a">HE</div>' ;  
			var str2 = '<div class="b">HE</div><div>Him</div>' ;

			var comparator = VWO.StringComparator.create({
				stringA: str1,
				stringB: str2,
				splitOn: '\n'
			});

			comparator.compare();
			
		});
	});



	describe('method: compare', function () {
		it('case 3: compares two strings and gives back strings added, removed and changed', function () {


		var str1 = '<div class="article"><a class="article-category" href="http://mashable.com/lifestyle/">Lifestyle</a><h1 class="article-title"><a data-turbo-target="post-slider" href="http://mashable.com/2014/06/25/space-tourism-hot-air-balloon/">Hot-Air Balloon to Take Tourists 20 Miles Above Earth</a></h1><div class="article-byline">The Associated Press</div><p class="article-excerpt">A space-tourism company wants to offer tourists trips to space for $75,000.</p></div>' ;

		var str2 = '<div class="article-content "><a class="article-category" href="http://mashable.com/lifestyle/">Lifestyle</a><h1 class="article-title"><a data-turbo-target="post-slider" href="http://mashable.com/2014/06/25/space-tourism-hot-air-balloon/">Hot-Air Balloon to Take Tourists 20 Miles Above Earth</a></h1><div class="article-byline">The Associated Press</div><p class="article-excerpt">A space-tourism company wants to offer tourists trips to space for $75,000.</p></div>' ; 

			var comparator = VWO.StringComparator.create({
				stringA: str1,
				stringB: str2,
				splitOn: '/[^a-z0-9_ \r\n]+/gi'
			});

			comparator.compare();
		});
	});

	describe('method: compare', function () {
		it('case 4: compares two strings and gives back strings added, removed and changed', function () {


		var str1 = '<div class="a"><span class="current">1</span></div>' ; 
		
		var str2 = '<div class="v"><span class="current">1</span></div>' ; 

			var comparator = VWO.StringComparator.create({
				stringA: str1,
				stringB: str2,
				splitOn: '/[^a-z0-9_ \r\n]+/gi'
			});

			comparator.compare();
		});
	});

});
