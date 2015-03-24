

/*
 * GET /mock/tags
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * resourceType(type: array) - query parameter - Types of resources to return
 * associatedId(type: string) - query parameter - UUID of resource for which to return the tags
 */
exports.getMockTags = function(req, res) {
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	
	res.status(200);
    
	// set response body and send
	res.json(state.tags);
};

/*
 * POST /mock/tags
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * body - body parameter - JSON Tag object
 */
exports.postMockTags = function(req, res) {
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	req.body.id = state.tags.length + 1;
	
	state.tags.push(req.body)

	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /mock/tags/{tagId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * tagId(type: string) - path parameter - Unique id of the tag
 */
exports.getMockTags2 = function(req, res) {
	req.check('tagId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	
	var tag = _.find(state.tags, { 'id': req.params.tagId })
    
    if (tag) {
	    res.status(200);
        res.json(tag);
    } else {
        res.status(404);
        res.json('not found');
    }
};

/*
 * PUT /mock/tags/{tagId}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * tagId(type: string) - path parameter - Unique id of the tag
 * body - body parameter - JSON Tag object
 */
exports.putMockTags = function(req, res) {
	req.check('tagId', 'Invalid parameter').notEmpty();
	req.check('body', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	var tag = _.find(state.tags, { 'id': req.params.tagId })
    
    if (!tag) {
      return res.json(404, { status: 'error', message: { mesage: 'User doesnt exist'} })
    }

    res.status(200);
    res.json(tag);

};

/*
 * DELETE /mock/tags/{tagId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * tagId(type: string) - path parameter - Unique id of the tag
 */
exports.deleteMockTags = function(req, res) {
	req.check('tagId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	var tag = _.find(state.tags, { 'id': req.params.tagId })
    
    if (!tag) {
      return res.json(404, { status: 'error', message: { mesage: 'User doesnt exist'}, result: null})
    }
	res.status(200);

	// set response body and send
	res.json({ status: 'success', message: null, result: null});
};

/*
 * GET /mock/tags/{tagId}/resources
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * tagId(type: string) - path parameter - Unique id of the tag
 * resourceType(type: array) - query parameter - Types of resources to return
 */
exports.getMockTagsResources = function(req, res) {
	req.check('tagId', 'Invalid parameter').notEmpty();
	req.checkQuery('resourceType', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST /mock/tags/{tagId}/resources
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * tagId(type: string) - path parameter - Unique id of the tag
 * body - body parameter - List of resource uuid to add
 */
exports.postMockTagsResources = function(req, res) {
	req.check('tagId', 'Invalid parameter').notEmpty();
	req.check('body', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * DELETE /mock/tags/{tagId}/resources
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * tagId(type: string) - path parameter - Unique id of the tag
 */
exports.deleteMockTagsResources = function(req, res) {
	req.check('tagId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /mock/tags/{tagId}/resources/{uuid}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * tagId(type: string) - path parameter - Unique id of the tag
 * uuid(type: string) - path parameter - Unique id of a resource
 */
exports.getMockTags3 = function(req, res) {
	req.check('tagId', 'Invalid parameter').notEmpty();
	req.check('uuid', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /mock/tags/{tagId}/resources/{uuid}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * tagId(type: string) - path parameter - Unique id of the tag
 * uuid(type: string) - path parameter - Unique id of a resource
 * body - body parameter - empty body
 */
exports.putMockTags2 = function(req, res) {
	req.check('tagId', 'Invalid parameter').notEmpty();
	req.check('uuid', 'Invalid parameter').notEmpty();
	req.check('body', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * DELETE /mock/tags/{tagId}/resources/{uuid}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * tagId(type: string) - path parameter - Unique id of the tag
 * uuid(type: string) - path parameter - UUID of the resource to delete
 */
exports.deleteMockTags2 = function(req, res) {
	req.check('tagId', 'Invalid parameter').notEmpty();
	req.check('uuid', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /mock/tags/{tagId}/pems
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * tagId(type: string) - path parameter - Unique id of the system
 */
exports.getMockTagsPems = function(req, res) {
	req.check('tagId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST /mock/tags/{tagId}/pems
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * tagId(type: string) - path parameter - Unique id of the tag
 * body - body parameter - Unique id of a resource
 */
exports.postMockTagsPems = function(req, res) {
	req.check('tagId', 'Invalid parameter').notEmpty();
	req.check('body', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * DELETE /mock/tags/{tagId}/pems
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * tagId(type: string) - path parameter - Unique id of the tag
 */
exports.deleteMockTagsPems = function(req, res) {
	req.check('tagId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /mock/tags/{tagId}/pems/{username}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * tagId(type: string) - path parameter - Unique id of the tag
 * username(type: string) - path parameter - Valid username
 */
exports.getMockTags4 = function(req, res) {
	req.check('tagId', 'Invalid parameter').notEmpty();
	req.check('username', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST /mock/tags/{tagId}/pems/{username}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * tagId(type: string) - path parameter - Unique id of the tag
 * username(type: string) - path parameter - Valid username
 * body - body parameter - Valid permission value
 */
exports.postMockTags2 = function(req, res) {
	req.check('tagId', 'Invalid parameter').notEmpty();
	req.check('username', 'Invalid parameter').notEmpty();
	req.check('body', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * DELETE /mock/tags/{tagId}/pems/{username}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * tagId(type: string) - path parameter - Unique id of the tag
 * username(type: string) - path parameter - Username to revoke permission
 */
exports.deleteMockTags3 = function(req, res) {
	req.check('tagId', 'Invalid parameter').notEmpty();
	req.check('username', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};